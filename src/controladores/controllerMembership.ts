import {Request, Response} from "express";
import Membership from "../clases/Membership";

class controllerMembership {

    async getAllMembership(request: Request, response: Response){
        try { 
            const membership = await Membership.find();
            response.json(membership);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllMembership' });
        }
    }

    async getMembershipById(request: Request, response: Response){
        const membershipId = request.params.id;
        try {
            const levelOfMembership = await Membership.findById(membershipId);
            if (levelOfMembership) {
                response.json(levelOfMembership);
            } else {
                response.status(404).json({ message: 'Membership not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getMembershipById' });
        }
    }

    async createMembership(request: Request, response: Response){
        const {client, level} = request.body;

        const newMembership = new Membership({
            client,
            level,
        })
        try {
            const createMembership = await newMembership.save();
            response.json(createMembership);
        } catch (error) {
            response.status(500).json({ message: 'Error: createMembership' });
        }
    }

    async updateMembership(request: Request, response: Response){
        const membershipId = request.params.id;
        const { client, level} = request.body;

        try {
            const newMembership  = await Membership.findByIdAndUpdate(
                membershipId,
                {client, level},
                { new: true }
            );

            if (newMembership) {
                response.json(newMembership);
            } else {
                response.status(404).json({ message: 'Membership not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateMembership' });
        }
    }

    async deleteMembership(request: Request, response: Response){
        const membershipId = request.params.id;

        try {
            const membershipDeleted= await Membership.findByIdAndDelete(membershipId);

            if (membershipDeleted) {
                response.json(membershipDeleted);
            } else {
                response.status(404).json({ message: 'Membership not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteMembership' });
        }
    }
}

export default new controllerMembership();