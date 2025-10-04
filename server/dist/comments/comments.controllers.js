import prisma from "../lib/prisma.js";
import { z } from 'zod/v4';
const commentSchema = z.object({
    text: z.string().min(2).max(1000),
    author: z.string().min(2).max(100)
});
const idSchema = z.object({
    id: z.cuid()
});
export const getComments = async (_req, res) => {
    try {
        const comments = await prisma.comment.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                children: true,
            }
        });
        res.json(comments);
    }
    catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};
export const createComment = async (req, res) => {
    try {
        const { success, data, error } = commentSchema.safeParse(req.body);
        if (!success) {
            res.status(400).json({ error: error.issues });
            return;
        }
        const { text, author } = data;
        const timestamp = new Date().toLocaleString();
        const newComment = await prisma.comment.create({
            data: {
                text,
                author,
                timestamp,
                likes: 0
            }
        });
        res.status(201).json(newComment);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};
export const likeComment = async (req, res) => {
    try {
        const { success, error, data } = idSchema.safeParse(req.params);
        if (!success) {
            res.status(400).json({ error: error.issues });
            return;
        }
        const { id } = data;
        const comment = await prisma.comment.update({
            where: { id },
            data: { likes: { increment: 1 } }
        });
        res.json({ likes: comment.likes });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};
export const replyComment = async (req, res) => {
    try {
        const { success: idSuccess, error: idError, data: idData } = idSchema.safeParse(req.params);
        if (!idSuccess) {
            res.status(400).json({ error: idError.issues });
            return;
        }
        const { id } = idData;
        const { success, data, error } = commentSchema.safeParse(req.body);
        if (!success) {
            res.status(400).json({ error: error.issues });
            return;
        }
        const { text, author } = data;
        const timestamp = new Date().toLocaleString();
        const newComment = await prisma.comment.create({
            data: {
                text,
                author,
                parentId: id,
                timestamp,
                likes: 0
            }
        });
        res.status(201).json(newComment);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};
