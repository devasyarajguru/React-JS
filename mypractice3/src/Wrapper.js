import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

export default function(props)
{
    const navigate = useNavigate();
    return <Profile {...props} navigate={'/Home'}/>;
}

