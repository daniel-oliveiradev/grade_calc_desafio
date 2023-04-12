const students = [
  {
    name: "Junior",
    testGrade1: 3,
    testGrade2: 8,
  },
  {
    name: "Carlos",
    testGrade1: 9,
    testGrade2: 6,
  },
  {
    name: "Leandro",
    testGrade1: 8,
    testGrade2: 7.5,
  },
  {
    name: "Daniel",
    testGrade1: 3,
    testGrade2: 1.5,
  }
]

function averageTestCalc(grade1, grade2){
  return (grade1 + grade2)/2
}

for(let student of students){
  let calc = averageTestCalc(student.testGrade1, student.testGrade2)
  
  if(calc < 7){
    alert(`
      A média do(a) aluno(a) ${student.name} é: ${calc.toFixed(1)}
      Não foi dessa vez, ${student.name}! Tente novamente!
    `)
  }else{
    alert(`
      A média do(a) aluno(a) ${student.name} é: ${calc.toFixed(1)}
      Parabens, ${student.name}! Você foi aprovado(a) no concurso!
    `)
  }
}