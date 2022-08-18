import { Employee } from "@database/model/employee"
import { employeeRepo } from "@database/repository/EmployeeRepository";
import { getCustomRepository, getManager, getRepository } from "typeorm"


export class HospitalService {
    
    public async getalldata():Promise<Employee[]>{
        const employeeRepository=getManager().getRepository(Employee)
        const employeeData = await employeeRepository.find({
            select:['name','salary']   
        })
        console.log(employeeData)
        return employeeData       
    }
    public async createEmployee(name : string , salary : number):Promise<Employee>{
        const EmployeeRepository=getCustomRepository(employeeRepo)
        return EmployeeRepository.customSave(name,salary)
    }

    public async getEmployeeByName(name : string ):Promise<Employee[]>{
        const EmployeeRepository=getRepository(Employee)
        const employeeData = await EmployeeRepository.find({
            where:{
                name : name
            }  
        })
        return employeeData

    }

    public async getEmployeeById(id : string ):Promise<Employee[]>{
        const EmployeeRepository=getRepository(Employee)
        const employeeData = await EmployeeRepository.find({
            where:{
                id
            }  
        })
        return employeeData
    }

    public async updateEmployee(id:string ,name :string):Promise<Employee[]>{
        const EmployeeRepository=getRepository(Employee)
        let data = await EmployeeRepository.update(id,{
            name:
        })
    }


}