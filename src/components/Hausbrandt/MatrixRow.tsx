import { Typography , Stack} from '@mui/material';

interface Props {
  label: string;
  children?: string;
}

export const MatrixRow: React.FC<Props> = (props: Props)=>{
  return (
    <Stack className='w-full justify-between' direction="row">
      <Typography alignSelf='self-start' className='text-jet w-max' variant='subtitle2'>{`${props.label}:`}</Typography>
      <Typography alignSelf='self-end' className='text-jet w-max' variant='subtitle2'>{props.children || ''}</Typography>
    </Stack>
  );
}