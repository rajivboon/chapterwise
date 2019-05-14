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
           <a className="nav-link port-navbar-likn">{title} </a>
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
                <Navbar className=" port-navbar port-default absolute " color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand " href="/">Rajiv</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            
                            {/* <Link href="/about">
                                <a className="nav-link">About</a>
                            </Link> */}
                            <NavItem className="port-navbar-item">
                            <BsnavLinks route="/" title="Home" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsnavLinks route="/about" title="About" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsnavLinks route="/blogs" title="Blogs" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsnavLinks route="/portfolios" title="portfolios" />
                            </NavItem>

                            <NavItem className="port-navbar-item">
                                <BsnavLinks route="/cv" title="Cv" />
                            </NavItem>                         
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}