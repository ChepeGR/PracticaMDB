import {Request, Response} from "express";
import Employee from "../clases/Employee";

class employeeController{

    async getAllEmployees(request: Request, response:Response){
        try{
            const employee = await Employee.find();
            response.json(employee);
        }catch(error){
            response.status(500).json({message : 'Error getAllEmployees'})
        }
    }

    async getEmployeesById(request: Request, response: Response){
        const employeesId =  request.params.id;
        try{
            const employee = await Employee.findById(employeesId);
            if(employee){
                response.json(employee);
            }else {
                response.status(404).json({message : 'Employee not found'})
            }
        } catch (error){
            response.status(500).json({messege: 'Error: getEmployeesById'})
        }
    }
    async createEmployee(response: Response, request: Request){
        const {officeHours} = request.body;
        const newEmployee = new Employee({
            officeHours
        }) 
        try{
            const createdEmployee = await newEmployee.save();
            response.json(createdEmployee);
        } catch(error){
            response.status(500).json({message : 'Error: createEmployee'})
        }
    }
    async updateEmployee(request: Request, response: Response){
        const employeesId = request.params.id;
        const {officeHours} = request.body;

        try{
            const newEmployee = await Employee.findByIdAndUpdate(
                employeesId,
                {officeHours},
                {new: true}
            );
            if(newEmployee){
                response.json(newEmployee);
            }else{
                response.status(404).json({message: 'Employee not found'})
            }
        }catch(error){
            response.status(500).json({message: 'Error: updateEmployee'})
        }
    }
    async deleteEmployee(request: Request, response: Response){
        const employeesId = request.params.id;

        try{
            const deletedEmployee = await Employee.findByIdAndDelete(employeesId);
            
            if(deletedEmployee){
                response.json(deletedEmployee);
            }else{
                response.status(404).json({message: 'Employee not found'})
            }
        }catch(error){
            response.status(500).json({message: 'Error: deleteEmployee error'})
        }

    }
}

export default new employeeController();