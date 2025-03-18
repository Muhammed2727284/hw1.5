import { useNavigate } from "react-router-dom";

const Page2 = ({posts}) => {
  const navigate = useNavigate();

  return (
    <div>
      {
          posts.map((item) => {
            return <h2 key={item.id}>{item.title}</h2>
          })
        }
        <button onClick={() => 
          navigate(-1)
        }>go back</button>
    </div>
  )
}

export default Page2
