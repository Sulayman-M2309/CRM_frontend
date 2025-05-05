import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const SalaryDetailsPage = () => {
  const { salaryID } = useParams();
  const [salary, setSalary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalary = async () => {
      try {
        const response = await axios.get(`api/v1/salary${salaryID}`);
        setSalary(response.data.data);
      } catch (err) {
        setError('Could not fetch salary details');
      } finally {
        setLoading(false);
      }
    };

    fetchSalary();
  }, [salaryID]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!salary) return <p className="text-center">No data found</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Salary Details</CardTitle>
          <CardDescription>
            {salary.employee.firstname} {salary.employee.lastname} — {salary.employee.department}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm">
          <div><strong>Basic Pay:</strong> {salary.basicpay} {salary.currency}</div>
          <div><strong>Bonuses:</strong> {salary.bonuses} {salary.currency}</div>
          <div><strong>Deductions:</strong> {salary.deductions} {salary.currency}</div>
          <div><strong>Net Pay:</strong> {salary.netpay} {salary.currency}</div>
          <div><strong>Due Date:</strong> {new Date(salary.duedate).toLocaleDateString()}</div>
          <div><strong>Status:</strong> {salary.status}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalaryDetailsPage;
