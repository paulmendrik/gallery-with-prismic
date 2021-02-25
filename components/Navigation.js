import React, { useState } from 'react';
import { default as NextLink } from 'next/link';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';




const Navigation = () => {
    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    const showDrawer = () => { setVisible(true); };
    const onClose = () => { setVisible(false); };

    return (
    <>
    <Row justify="center">
    <Col  xs={16} sm={18} span={16}><Title className="logo">Kat Lightfoot</Title></Col>
    <Col span={4} className="menubtn"><Button onClick={showDrawer}><MenuOutlined /></Button></Col>  
    </Row>
    <Drawer placement="right" closable={true} onClose={onClose} visible={visible} >
            
            <Typography.Text><NextLink href="/">Home</NextLink></Typography.Text>
            <Typography.Text><NextLink href="/about">About</NextLink></Typography.Text>
            <Typography.Text><NextLink href="/gallery">Gallery</NextLink></Typography.Text>
            <Typography.Text><NextLink href="/giclee" >Giclee Prints</NextLink></Typography.Text>
            <Typography.Text><NextLink href="/canvas" >Canvas Prints</NextLink></Typography.Text>
            <Typography.Text><NextLink href="/exhibitions">Exhibitions</NextLink></Typography.Text>
            <Typography.Text><NextLink href="/press">Press</NextLink></Typography.Text>
            <Typography.Text><NextLink href="/contact">Contact</NextLink></Typography.Text>
            
    </Drawer>
    </>
    )
}

export default Navigation