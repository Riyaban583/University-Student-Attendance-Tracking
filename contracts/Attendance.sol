// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract Attendance is AccessControl {
    bytes32 public constant TEACHER_ROLE = keccak256("TEACHER_ROLE");

    mapping(address => bytes32) public studentHash;

    event StudentRegistered(address indexed student, bytes32 indexed hash);
    event AttendanceMarked(bytes32 indexed studentHash, uint256 indexed classId, uint256 timestamp, address indexed markedBy);

    constructor(address admin) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
    }

    function registerStudent(bytes32 _hash) external {
        require(_hash != bytes32(0), "Invalid hash");
        studentHash[msg.sender] = _hash;
        emit StudentRegistered(msg.sender, _hash);
    }

    function markAttendanceByStudent(uint256 classId) external {
        bytes32 h = studentHash[msg.sender];
        require(h != bytes32(0), "Student not registered");
        emit AttendanceMarked(h, classId, block.timestamp, msg.sender);
    }

    function markAttendanceByTeacher(address student, uint256 classId)
        external
        onlyRole(TEACHER_ROLE)
    {
        bytes32 h = studentHash[student];
        require(h != bytes32(0), "Student not registered");
        emit AttendanceMarked(h, classId, block.timestamp, msg.sender);
    }

    function addTeacher(address teacher) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(TEACHER_ROLE, teacher);
    }
}
