import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginHook = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    //! validation eksik, sonra kendin yaz, ayni register gibi

    const onSubmit = async () => {
        setIsPress(true);
        setLoading(true);
        await dispatch(
            loginUser({
                email,
                password,
            })
        );

        setLoading(false);
        setIsPress(false);
    };
    const res = useSelector((state) => state.authReducer.loginUser);
    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data.data));
                    toast.success("Giris islemi basarili");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1500);
                } else {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                }

                if (res.data.message === "User not found") {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    toast.error("Sifre veya email'i hatali girdiniz");
                }
                setLoading(true);
            }
        }
    }, [loading, res]);

    return [
        email,
        password,
        loading,
        onChangeEmail,
        onChangePassword,
        onSubmit,
        isPress,
    ];
};

export default LoginHook;
