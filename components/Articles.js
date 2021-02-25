import { Row, Col, Button } from 'antd';
import Link from 'next/link';

export default function Article({ title, excerpt, slug,image }) {
    
    return (
        <Col span={24}>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <Button><Link as={`/press/${slug.current}`} href="/press/[slug]"><a>Read More</a></Link></Button>
        </Col>
    )  
}

