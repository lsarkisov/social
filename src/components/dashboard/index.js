import React from 'react'
import { ROLE_MODEL_USER, ROLE_COMPANY_USER, ROLE_ADMIN } from 'const/requests'
import ModelDashboard from 'components/model'
import CompanyDashboard from 'components/company'
import AdminDashboard from 'components/admin'

export default function Dashboard(props) {
  const role = localStorage.getItem('role')

  return (
    <div className="dashboard">
      {role && role === ROLE_MODEL_USER && <ModelDashboard />}
      {role && role === ROLE_COMPANY_USER && <CompanyDashboard />}
      {role && role === ROLE_ADMIN && <AdminDashboard />}
    </div>
  )
}
