import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getOneUserAddress,
    editUserAddress,
} from "./../../redux/actions/userAddressesAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import notify from "../useNotifaction";

const EditAddressHook = (id) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [loadingEdit, setLoadingEdit] = useState(true);
    const [alias, setAlias] = useState("");
    const [detalis, setDetalis] = useState("");
    const [phone, setPhone] = useState("");

    const onChangeAlias = (event) => {
        event.persist();
        setAlias(event.target.value);
    };

    const onChangeDetalis = (event) => {
        event.persist();
        setDetalis(event.target.value);
    };

    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value);
    };

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getOneUserAddress(id));
            // console.log(res);
            setLoading(false);
        };
        get();
    }, []);

    const resAddress = useSelector(
        (state) => state.userAddressesReducer.oneAddress
    );
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                // console.log(resAddress.data);
                //! duzenlemeler yapildi (api farkliligindan dolayi)
                setAlias(resAddress.data.addressLabel);
                setDetalis(resAddress.data.city);
                setPhone(resAddress.data.phone);
            }
        }
    }, [loading]);

    const handelEdit = async () => {
        setLoadingEdit(true);
        await dispatch(
            editUserAddress(id, {
                addressLabel: alias,
                city: detalis,
                phone: phone,
            })
        );
        setLoadingEdit(false);
    };
    const resEdit = useSelector(
        (state) => state.userAddressesReducer.editAddress
    );
    useEffect(() => {
        if (loadingEdit === false) {
            if (resEdit && resEdit.status === 200) {
                toast.success("تمت عملية التعديل بنجاح");
                setTimeout(() => {
                    navigate("/user/addresses");
                }, 3000);
            } else {
                toast.error("فشل فى عملية التعديل");
            }
        }
    }, [loadingEdit]);

    return [
        handelEdit,
        alias,
        detalis,
        phone,
        onChangeAlias,
        onChangeDetalis,
        onChangePhone,
    ];
};

export default EditAddressHook;
