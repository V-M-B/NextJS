import CompanionCard from '@/components/CompanionCard';
import SearchInputs from '@/components/SearchInputs';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companinon.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const CompanionLibrary = async ({ searchParams }: SearchParams) => {
 const filters = await searchParams;
 const subject = filters.subject ? filters.subject : '';
 const topic = filters.topic ? filters.topic : '';

const companions = await getAllCompanions({subject , topic}); 

console.log('Companions:', companions);

  return (
    <main >
      <section className='flex justify-between gap-4 max-sm:flex-col '>
      <h1>Companion Library</h1>
      <div className="flex gap-4">
        <SearchInputs/>
        <SubjectFilter/>
      </div>
      </section>

      <section className='companions-grid'>
      {companions.map((companion) => (
        <CompanionCard key={companion.id}{...companion}
        color={getSubjectColor(companion.subject) || 'bg-gray-200'}
        />
      ))}
      </section>
    </main>

  
  )
}

export default CompanionLibrary