import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='flex flex-1 w-full mx-auto'>
      <div className='w-full h-4 bg-[#7ca7d6]' />
      <div className='w-full h-8 justify-between'>
        {/* menu */}
        <div className='flex flex-row w-1/3 justify-evenly'>
          <Button variant='link'>Our Menu</Button>
          <Button variant='link'>Catering</Button>
          <Button variant='link'>About</Button>
          <Button variant='link'>Locations</Button>
        </div>
        {/* Logo in Middle */}

        {/* download app and order now */}
      </div>
    </div>
  );
}
