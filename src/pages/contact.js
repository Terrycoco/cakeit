import React from "react"
import Layout from "../components/Layout/Layout"
import UserForm from "../components/UserForm/UserForm"
import { useContactQuery } from "../hooks/useContactQuery"
import Blurb from "../components/Blurb/Blurb"

const ContactPage = () => {
  return (
    <Layout>
      <Blurb dataHook={useContactQuery} />
      <UserForm />
    </Layout>
  )
}

export default ContactPage
