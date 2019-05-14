// import React from 'react';
import Link from 'next/link';

// class Header extends React.Component {
//     render() {
//         // debugger;
//         const title = this.props.title;

//         return (
//             <React.Fragment>
               
//                 <Link href="/">
//                     <a style = {{'fontSize' : '20px'}} >Home</a>
//                 </Link>

                // <Link href="/about">
                //     <a>About</a>
                // </Link>

                // <Link href="/blogs">
                //     <a >Blogs</a>
                // </Link>

                // <Link href="/portfolios">
                //     <a >Portfolios</a>
                // </Link>

                // <Link href="/cv">
                //     <a>Cv</a>
                // </Link>

//                 <style jsx>
//                     {`
//                         a {
//                             font-size: 20px;
//                         };
//                         .customClass {
//                             color: red;
//                         }
                        
//                     `}
//                     </style>

//             </React.Fragment>
//         )
//     }
// }

// export default Header;


import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    
} from 'reactstrap';


const BsnavLinks = (props) => {
   const { route, title } = props;
   return (
       <Link href={route}>
           <a className="nav-link">{title} </a>
       </Link>
   )
}

export default class Example extends React.Component {


    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Rajiv</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            
                            {/* <Link href="/about">
                                <a className="nav-link">About</a>
                            </Link> */}
                            <NavItem>
                            <BsnavLinks route="/" title="Home" />
                            </NavItem>
                            <NavItem>
                                <BsnavLinks route="/about" title="About" />
                            </NavItem>
                            <NavItem>
                                <BsnavLinks route="/blogs" title="Blogs" />
                            </NavItem>
                            <NavItem>
                                <BsnavLinks route="/portfolios" title="portfolios" />
                            </NavItem>

                            <NavItem>
                                <BsnavLinks route="/cv" title="Cv" />
                            </NavItem>                         
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}