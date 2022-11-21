import React, { useContext } from 'react'
import AccountContext from '../context'

function Account() {
    const { accounts, setAccounts } = useContext(AccountContext)


    const renderAccounts = accounts.map((account, i) => {

        const isAccountHasParent = account.account_parent_code ? true : false

        const parentIndex = isAccountHasParent ? accounts.findIndex(object => {
            return object.account_id === account.account_id;
        }) : null

        const accountName = isAccountHasParent ? accounts[parentIndex].account_name: account.account_name

        return (
            <tr key={i} >
                <td> {accountName} </td>
                <td> <button onClick={()=>{ onClickHandler(account.account_id) }} > + Add  </button> </td>
                <td> {account.account_type} </td>
                <td> {account.account_category} </td>
                <td> {account.use_status  === true ? "YES" : "NO"} </td>
                <td> {account.note} </td>


            </tr>
        )

    })
    return (
        <>
            <h1> Accounts </h1>
            <table class="table">
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
        </>
    )
}

export default Account