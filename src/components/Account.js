import React from 'react'
import {useSelector} from "react-redux"
import Booking from "../components/Booking"

export default function Account() {
    const account = useSelector(state => state.account);
    console.log(account);
    return (
        <div>
            {account.map(account => (
            <div>
                <h2>My Account</h2>
                <span>{account.firstName}  {account.lastName} </span>
                <div>
                    <div>
                        <h3>My Personal Informations</h3>
                        <form>
                            <fieldset>
                                <label>FirstName</label>
                                <input
                                type="text"
                                // value={account.firstName}
                                />
                            </fieldset>
                            <fieldset>
                                <label>LastName</label>
                                <input
                                type="text"
                                // value={account.lastName}
                                />
                            </fieldset>
                            <fieldset>
                                <label>Phone Number</label>
                                <input
                                // value={account.phoneNumber}
                                />
                            </fieldset>
                            <button>Update</button>
                        </form>
                    </div>
                </div>
            </div>
            ))}
            <Booking/>
        </div>
    )
}
