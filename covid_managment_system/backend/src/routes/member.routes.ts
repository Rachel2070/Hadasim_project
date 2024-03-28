import express from "express";
import { addMember, deleteMember, getMember, getMembers, updateCovidInfo, updateMemberInfo } from "../controllers/member.controller";
import { validateAddMember, validateUniqueIdentityCardPost, validateUniqueIdentityCardPutOrPatch, validateUpdateCovidInfo, validateUpdateMember } from '../middleware/memberMiddlewares'

const router = express.Router();

// Define routes for member-related operations
router.get('/', getMembers); // Route to get all members
router.get('/:id', getMember); // Route to get a single member by ID
router.post('/', validateAddMember, validateUniqueIdentityCardPost, addMember); // Route to add a new member
router.put('/:id/info', validateUpdateMember, validateUniqueIdentityCardPutOrPatch, updateMemberInfo); // Route to update member information
router.delete('/:id', deleteMember); // Route to delete a member

router.put('/:id/covidInfo', validateUpdateCovidInfo, updateCovidInfo); // Route to update COVID-19 information for a member

export default router;
