import express from "express";
import { addMember, deleteMember, getMember, getMembers, updateCovidInfo, updateMemberInfo } from "../controllers/member.controller";
import {validateAddMember, validateUniqueIdentityCardPost, validateUniqueIdentityCardPutOrPatch, validateUpdateCovidInfo, validateUpdateMember} from '../middleware/memberMiddlewares'

const router = express.Router();

router.get('/', getMembers);
router.get('/:id', getMember);
router.post('/', validateAddMember, validateUniqueIdentityCardPost, addMember);
router.put('/:id/info', validateUpdateMember, validateUniqueIdentityCardPutOrPatch, updateMemberInfo);
router.delete('/:id', deleteMember);

router.put('/:id', validateUpdateCovidInfo, updateCovidInfo);

export default router;