function Container({ children }) {
  return <div className="container   
                          min-height: 100vh;
                          padding: 0 0.5rem;
                          display: flex;
                          flex-direction: column;
                          justify-content: center;
                          align-items: center;">{children}</div>
}

export default Container
