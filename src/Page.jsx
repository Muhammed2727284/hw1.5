import { useNavigate } from "react-router-dom"


  const Page = ({ users }) => {
    const navigate = useNavigate();

    return (
      <div>
        {
          users.map((item) => {
            return <h2 key={item.id}>{item.name}</h2>
          })
        }
        <button onClick={() => 
          navigate(-1)
        }>go back</button>
      </div>
    )
  }

  export default Page
