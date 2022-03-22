function Stats() {
  return (
    <div className='stats shadow'>
      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-8 h-8 stroke-current'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3L4 14h7v7l9-11h-7z'
            />
          </svg>
        </div>
        <div className='stat-title'>Page Views</div>
        <div className='stat-value text-secondary'>2.6M</div>
        <div className='stat-desc'>21% more than last month</div>
      </div>
    </div>
  );
}
export default Stats;
