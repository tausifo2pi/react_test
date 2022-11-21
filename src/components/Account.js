import React, { useContext, useState } from 'react'
import AccountContext from '../context'
import Modal from './Modal'



function Account() {
    const { accounts, setAccounts } = useContext(AccountContext)
    const [showModal, setShowModal] = useState(false)
    const [childAccount, setChildAccount] = useState([])


    const onClickHandler = (index) => {
        const __childAccount = accounts.filter((account) => {
            return account.account_parent_code === accounts[index].account_id

        })

        setShowModal(true)
        setChildAccount(__childAccount)



    }


    const renderAccounts = accounts.map((account, i) => {

        const isAccountHasParent = account.account_parent_code ? true : false

     
        let parentIndex = null

        if (isAccountHasParent) {

            for (let j = 0; accounts.length > j; j++) {
                if (account.account_parent_code === accounts[j].account_id) parentIndex = j
        }
        }

        const accountName = isAccountHasParent ? `Parent - ${accounts[parentIndex].account_name}` : account.account_name

        return (
            <tr key={i} >
                <td> {accountName} </td>
                <td> <button onClick={() => { onClickHandler(i) }} > + Add  </button> </td>
                <td> {account.account_type} </td>
                <td> {account.account_category} </td>
                <td> {account.use_status === true ? "YES" : "NO"} </td>
                <td> {account.note} </td>


            </tr>
        )

    })
    return (
        <>
            <h1> Accounts </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Account Name</th>
                        <th scope="col">Action </th>
                        <th scope="col">Account Type</th>
                        <th scope="col">Account Category</th>
                        <th scope="col">Use status</th>
                        <th scope="col">Note</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderAccounts
                    }
                </tbody>
            </table>
            {showModal ? <Modal childAccount={childAccount} modalHandler={setShowModal} /> : null}
        </>
    )
}

export default Account