import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {allActions} from "@/store/rootActions";
import {useMemo} from "react";

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(allActions,dispatch), [dispatch]);
}