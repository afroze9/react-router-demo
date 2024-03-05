import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Outlet, Link, useLocation } from "react-router-dom"

export function Home() {
  return <div>
    <h1>Home</h1>
    <p>Home</p>
  </div>
}

export function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>Projects</p>
      <div>
        <Link to={"1"}>
          <button>1</button>
        </Link>
        <Link to={"2"}>
          <button>2</button>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export function ProjectDetails() {
  const params = useParams();
  const navigate = useNavigate();
  return <div>
    <Link to={"/projects"}>
      <button>Back</button>
    </Link>
    <button onClick={() => navigate('/projects')}>Programatic Back</button>
    <div>Project ID: {params.projectId}</div>
  </div>

}

export function People() {
  return (
    <div>
      <div>
        <h1>People</h1>
        <p>People</p>
      </div>
      <div>
        <Link to={"a"}>
          <button>A</button>
        </Link>
        <Link to={"b"}>
          <button>B</button>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export function PeopleA() {
  return <h2>People A</h2>
}

export function PeopleB() {
  return <h2>People B</h2>
}

export function Users() {
  const params = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>Users</h1>
      <p>Users</p>
      <p>{JSON.stringify(params)}</p>
      <p>{JSON.stringify(location)}</p>
    </div>
  )
}