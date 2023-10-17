import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header(){

    return(
        <div className="navBar">
            <div className="wrapper">
                <div className="left">
                    <div>
                        <KeyboardArrowDownIcon />
                        <PersonOutlineOutlinedIcon/>
                        <SearchIcon />
                        <FavoriteBorderOutlinedIcon />
                        <ShoppingCartOutlinedIcon />
                    </div>

                </div>
                <div className="center">

                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
