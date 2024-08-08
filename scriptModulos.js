import Consultorio from "./consultorio.js"
import Paciente from "./paciente.js"

const consultorio = new Consultorio(`Cerro`)
const pacienteuno = new Paciente(`Felipe`,`46`,`11111111-1`,`Cancer`)
const pacientedos = new Paciente(`antonio`,`46`,`11111111-1`,`Cancer`)
const pacientetres = new Paciente(`del campo`,`46`,`11111111-1`,`Cancer`)

consultorio.agregarPaciente = pacienteuno
consultorio.agregarPaciente = pacientedos
consultorio.agregarPaciente = pacientetres


console.log(consultorio)


