import getUserById from "./dao"

export async function getUser(id: number) {
    // eslint-disable-next-line no-useless-catch
    try {
        const user = await getUserById(id);
        // do some logic with user here
        return user;
    }
    catch (error) {
        throw error;
    }
}