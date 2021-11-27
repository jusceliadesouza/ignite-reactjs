interface RespositoryItemProps {
  repository: {
    name: String;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RespositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}