import { USER, axios } from "@/api";
import { sendReqToServer } from "@/api/useAxios";

const muteDeafenMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    if (action.type === "UserPanel/muteToggle" || action.type === "UserPanel/deafenToggle" || action.type === "UserCustomPanel/setStatus") {
        const currentState = store.getState();
        const { isMuted, isDeafened } = currentState.userPanel;
        const { Email } = currentState.userDetails;
        const { status } = currentState.userPanelCustom;

        const handleChange = async (e) => {
            try {

                const { response, error } = await sendReqToServer({
                    axiosInstance: axios,
                    url: USER.updateSettings,
                    method: "POST",
                    requestConfig: {
                        settings: {
                            "isMuted": isMuted,
                            "isDeafened": isDeafened,
                            "Status": status,
                        },
                        email: Email
                    },
                });
                if (response) {
                    console.log("updated ");
                }
            } catch (err) {
                console.log(err)
            }
        }

        handleChange()
        return result;
    }
    return result;
};

export default muteDeafenMiddleware;
