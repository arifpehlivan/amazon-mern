import Alert from 'react-bootstrap/Alert';
export default function MessageBox(props) {
    return (
        <Alert variant={props.variant || "info"} style={{textAlign:"center"}}>{props.children}</Alert>
    )
}