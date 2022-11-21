import React from 'react'

const styles = {
    modal: {
        position: "absolute",
        padding: "100px",
    }
}

function Modal({ modalHandler, childAccount }) {
    const renderAccounts = childAccount.map((account, i) => {
        return (
            <tr key={i} >
                <td>{account.account_name}</td>
            </tr>
        )
    })

    return (
        <div style={styles.modal} >
            {
                renderAccounts.length ? <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Account Name</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        renderAccounts
                    }
                </tbody>
            </table>: "No child account "
            }
            <button onClick={()=> modalHandler(false)} > close </button>
            
        </div>
    )
}

export default Modal