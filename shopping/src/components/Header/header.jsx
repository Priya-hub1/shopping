import {Link} from "react-router-dom";
import './Header.scss';
import logo from "../../assets/en.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header(){

    return (
        <div className ="navBar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src={logo} alt="Logo" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link to="/Products/1">Women</Link>
                    </div>
                    <div className="item">
                    <Link to="/Products/2">Men</Link>
                    </div>
                    <div className="item">
                    <Link to="/Products/3">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link to="/">LAMASTORE</Link>
                </div>
                <div className="right">
                   <div className="item">
                       <Link to="/">HomePage</Link>
                   </div>
                   <div className="item">
                       <Link to="/about">About</Link>
                   </div>
                   <div className="item">
                       <Link to="/contact">Contact</Link>
                   </div>
                   <div className="item">
                       <Link to="/stores">Stores</Link>
                   </div>
                   <div className="icons item">
                   <SearchIcon />
                   <PersonOutlineOutlinedIcon />
                   <FavoriteBorderOutlinedIcon /> 
                   <div className="cartIcon">
                   <ShoppingCartOutlinedIcon />  
                   <span>0</span>
                    </div>         
                   </div>
                </div>
        </div>
        </div>
    )
}
