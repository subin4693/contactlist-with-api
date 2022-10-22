import React from 'react'

const ContactList = ({ name, age, email, avatar }) => {
	return(	
			<div className="container">
				<div className="contact__container">
					<div className="img__container">
						<img src={avatar} alt="avatar" />
					</div>
					<div className="detail__container">
						<h4>Name: { name }</h4>
						<h4>Age: { age }</h4>
						<h4>Email: { email }</h4>						
					</div>
				</div>
			</div>
		);	
}

export default ContactList;