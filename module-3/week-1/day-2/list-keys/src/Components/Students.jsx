import React, { Component } from "react";

import studentsJSON from "../data/students.json";

class Students extends Component {
  state = {
    students: studentsJSON,
  };

  handleAddStudent = () => {
    const newStudent = {
      name: "Toto",
      avatar: "https://townsquare.media/site/295/files/2020/10/Toto.jpg",
      lovesReact: true,
    };

    // this.state.students.unshift(newStudent); // Never mutate the state !

    // 1 solution
    const copyStudents = [...this.state.students];
    copyStudents.unshift(newStudent);

    // solution n°2

    // const newStudents = [newStudent, ...this.state.students];
    this.setState({ students: [newStudent, ...this.state.students] });

    // this.setState({ students: copyStudents });
  };

  handleRemoveStudent(studentToRemoveIndex) {
    const copyStudents = [...this.state.students];

    copyStudents.splice(studentToRemoveIndex, 1);

    this.setState({ students: copyStudents });
  }

  render() {
    return (
      <div className="Students">
        <button onClick={this.handleAddStudent}>CLick</button>
        <div className="Students-container">
          {this.state.students.map((student, index) => (
            <div key={index} className="Student-card">
              <div className="Student-card__avatar-container">
                <img
                  alt=""
                  className="Student-card__avatar"
                  src={student.avatar}
                />
              </div>
              <div className="Student-card__info">
                <h5 className="Student-card__name">{student.name}</h5>
                {student.lovesReact && (
                  <p className="Student-card__preferences">I love it 🚀</p>
                )}
                <button onClick={() => this.handleRemoveStudent(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Students;
