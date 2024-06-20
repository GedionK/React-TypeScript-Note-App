import { Badge, Card, Stack } from "react-bootstrap";
import {  Tag } from "../App";
import { Link } from "react-router-dom";
import styles from "../NoteList.module.css"
type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};
export function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Stack gap={1} direction="horizontal" className="justify-content-left flex-wrap">
            {tags.map(tag => (<Badge className={`text-truncate ${styles.danger}`} key={tag.id}>{tag.label}</Badge>))}
        </Stack>
      </Card.Footer>
    </Card>
  );
}
