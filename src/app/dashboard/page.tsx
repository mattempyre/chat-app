import { FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import Button from '@/components/ui/Button';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <Button size='lg' variant='default' />;
};

export default page;
