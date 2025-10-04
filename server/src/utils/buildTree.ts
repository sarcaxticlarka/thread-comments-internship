import { Comment } from "@prisma/client"

interface CommentWithChildren extends Comment {
    children: CommentWithChildren[]
}

const buildTree = (comments: Comment[]): CommentWithChildren[] => {
    const commentMap = new Map<string, CommentWithChildren>();
    const rootComments: CommentWithChildren[] = [];

    comments.forEach(comment => {
        commentMap.set(comment.id, {
            ...comment,
            children: []
        });
    });

    comments.forEach(comment => {
        const commentWithChildren = commentMap.get(comment.id)!;
        
        if (!comment.parentId) {
            rootComments.push(commentWithChildren);
        } else {
            const parent = commentMap.get(comment.parentId);
            if (parent) {
                parent.children.push(commentWithChildren);
            } else {
                rootComments.push(commentWithChildren);
            }
        }
    });

    return rootComments;
};

export default buildTree
