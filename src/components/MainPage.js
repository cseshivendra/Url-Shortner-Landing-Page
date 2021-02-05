import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
class MainPage extends Component {

    constructor(props) {
        super(props)
        this.URLref = React.createRef()
        this.shortURLRef = React.createRef()
        this.state = {
            shortenedURL: "",
            variant: "success",
            buttonName: "Copy"
        }
    }
    //s://sleepy-ravine-77519.herokuapp.com/shorten
    validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }
    shortenHandler = (e) => {
        e.preventDefault();
        if (this.validURL(this.URLref.current.value)) {
            fetch('http://localhost:3001/shorten', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: this.URLref.current.value })
            }).then((res) => res.json()).then((data) => {
                console.log(data)
                this.setState({
                    shortenedURL: data.shortURL
                })
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            this.setState({
                error: "Please type a valid URL"
            })
        }
    }
    copyClipboardHandler = (e) => {
        e.preventDefault()
        var copyText = this.shortURLRef.current;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

        this.setState({
            buttonName: "Copied!",
            variant: "warning",
            error: ""

        })
    }
    mouseOutHandler = () => {
        this.setState({
            buttonName: "Copy",
            variant: "success"
        })
    }
    render() {
        return (
            <div>

                <div className="banner-form-group">

                    {this.state.error && <div className="row">

                        <div className="col-12">
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                {this.state.error}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                        </div>
                    </div>}
                    <h3 className="subtitle">Shorten URL Is Just Simple</h3>
                   
                        <form className="banner-form" action="#">
                            <input type="text" placeholder="Your URL here" name="url" required  ref={this.URLref}/>
                                <button   onClick={this.shortenHandler} >Shorten <i className="flaticon-startup"></i></button>
                </form>
                {this.state.shortenedURL && <form className="banner-form">
                        <input type="text" placeholder="Your URL here" name="url" required  value={this.state.shortenedURL}
                                            ref={this.shortURLRef} />
                            <button ref={this.copyButtonRef} onClick={this.copyClipboardHandler}
                                            onMouseOut={this.mouseOutHandler}>{this.state.buttonName
                                            }</button>
                </form>}
                            <div className="banner-counter">
                                <div className="counter-item">
                                    <h2 className="counter-title"><span className="counter">3,000</span>+</h2>
                                    <p>Links clicked per day</p>
                                </div>
                                <div className="counter-item">
                                    <h2 className="counter-title"><span className="counter">10,000</span>+</h2>
                                    <p>Shortened links in total</p>
                                </div>
                                <div className="counter-item">
                                    <h2 className="counter-title"><span className="counter">500</span>+</h2>
                                    <p>Happy users registered</p>
                                </div>
                            </div>     
            </div>


                        {/* <Container style={{ marginTop: "5%" }} className="pl-2 pr-2">






                            <Row className="mb-2">

                                <Col md="10" >




                                    <Form.Control placeholder="Your URL Here" ref={this.URLref} className="mt-2" size="lg" style={{ color: "blue" }} />

                                    <div data-WRID="WRID-160835542519485299" data-widgetType="staticBanner" data-responsive="yes" data-class="affiliateAdsByFlipkart" height="250" width="300"></div>







                                </Col>

                                <Col md="2"  >
                                    <Button block size="lg" className="mt-2">Shorten</Button>
                                </Col>
                            </Row>



                            {this.state.shortenedURL &&
                                <Row>

                                    <Col md="10">


                                        <Form.Control
                                            size="lg"
                                            value={this.state.shortenedURL}
                                            ref={this.shortURLRef}
                                            style={{ color: "blue" }}
                                            className="mt-2"
                                        />








                                    </Col>

                                    <Col md="2" >
                                        <Button block className="mt-2" size="lg" variant={this.state.variant} ref={this.copyButtonRef} onClick={this.copyClipboardHandler}
                                            onMouseOut={this.mouseOutHandler}>{this.state.buttonName
                                            }</Button>
                                    </Col>

                                </Row>}


                            {this.state.shortenedURL &&
                                <Row>

                                    <Col md="10">


                                        <Form.Control
                                            size="lg"
                                            value={this.state.shortenedURL}
                                            ref={this.shortURLRef}
                                            style={{ color: "blue" }}
                                            className="mt-2"
                                        />








                                    </Col>

                                    <Col md="2" >
                                        <Button block className="mt-2" size="lg" variant={this.state.variant} ref={this.copyButtonRef} onClick={this.copyClipboardHandler}
                                            onMouseOut={this.mouseOutHandler}>{this.state.buttonName
                                            }</Button>
                                    </Col>

                                </Row>}
                            <br />
                            <br />


                            <Row className="mt-3">
                                <Col md="5">
                                </Col>
                                <Col md="3">
                                    <Button style={{ color: "white" }} variant="success" size="lg" block><a href="#" style={{ color: "white", textDecoration: 'none' }}>Register for free</a></Button>
                                </Col>

                            </Row>


                        </Container>
                */}
               
            </div>

        );
    }
}

export default MainPage;

// // "heroku-postbuild": "npm run build:prod"


