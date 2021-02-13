import React from 'react'

export default function MyAccount() {
    return (
        <div>
            <h2>My Account</h2>
            <div>
                <div>
                    <h3>My Personal Informations</h3>
                    <form>
                        <fieldset>
                            <label>FirstName</label>
                            <input type="text"/>
                        </fieldset>
                        <fieldset>
                            <label>Name</label>
                            <input type="text"/>
                        </fieldset>
                        <fieldset>
                            <label>Phone Number</label>
                            <input type="number"/>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
