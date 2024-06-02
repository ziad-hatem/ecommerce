import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createNewUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const RegisterHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassowrd] = useState("");
    const [loading, setLoading] = useState(true);

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        setConfirmPassowrd(e.target.value);
    };
    const validationValues = () => {
        if (name === "") {
            toast.error("Kullanıcı adınızı giriniz");
            return;
        }
        if (email === "") {
            toast.error("Lutfen email girininz");
        }
        if (password !== confirmPassword) {
            toast.error("Lütfen aynı şifreyi giriniz");
            return;
        }
        //! burada validation'lar eksik, ben daha sonra ekele yapcagim :)
    };

    const res = useSelector((state) => state.authReducer.createUser);
    //! save data
    const onSubmit = async () => {
        validationValues();
        setLoading(true);
        //! herseyi durdur kodum gerceklesene kadar :)
        await dispatch(
            createNewUser({
                name: name,
                email: email,
                password: password,
                passwordConfirm: confirmPassword,
            })
        );
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    console.log("token local storage'e kayit edildi");
                    toast.success("E-mail basarili bir sekilde kaydedildi");
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassowrd("");
                    //! loading her zaman en son olmasina dikkat et cunku rerender yapiyor :)
                    // loading(true);
                    setTimeout(() => {
                        navigate("/login");
                    }, 3000);
                }
                //! abdurrahim bu kodu henuz yazmadi, onu bekliyorum ve ona gore degisiklik yapacagim :)
                if (res.data.errors) {
                    if (res.data.errors[0].msg === "E-mail laready in use") {
                        toast.error(
                            "Bu email zaten mevcut, lutfen giris yapiniz"
                        );
                    }
                }
            }
        }
    }, [loading, navigate, res]);

    return [
        name,
        email,
        password,
        confirmPassword,
        onChangeName,
        onChangeEmail,
        onChangePassword,
        onChangeConfirmPassword,
        onSubmit,
    ];
};

export default RegisterHook;
