import getUserById from "./dao"

export async function getUser(id: number) {
    try {
        const user = await getUserById(id);
        // do some logic with user here
        return user;
    }
    catch (error) {
        throw error;
    }
}