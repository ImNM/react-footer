import React from 'react';
import Footer from '../components/footer';
import { InstagramOutlined,FacebookOutlined,GithubOutlined } from '@ant-design/icons';

export function FooterContainer(){
    return (
        <Footer>

            <Footer.Wrapper>
                <Footer.Row>

               
                <Footer.Column>
                    <Footer.Title>About us</Footer.Title>
                    <Footer.Link href='#'>Story</Footer.Link>
                    <Footer.Link href='#'>abc</Footer.Link>
                    <Footer.Link href='#'>test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>service</Footer.Title>
                    <Footer.Link href='#'>test1</Footer.Link>
                    <Footer.Link href='#'>test2</Footer.Link>
                    <Footer.Link href='#'>test3</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact us</Footer.Title>
                    <Footer.Link href='#'>회사</Footer.Link>
                    <Footer.Link href='#'>회사1</Footer.Link>
                    <Footer.Link href='#'>회사2</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href='#'><FacebookOutlined />Facebook</Footer.Link>
                    <Footer.Link href='#'><InstagramOutlined />Instagram</Footer.Link>
                    <Footer.Link href='https://github.com/ImNM/react-footer'><GithubOutlined />GitHub</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>

        </Footer>
    )
}