import ApiError from "./CustomError";

export default async function getUserById(userId: number): Promise<{ name: string; age: number }> {
    return new Promise((resolve, reject) => {
        if (!userId || userId === 0) {
            const err = new ApiError(404, "User not found");
            reject(err);
        }
        else {
            resolve({
                name: "John Doe",
                age: 30
            })
        }
    });
}