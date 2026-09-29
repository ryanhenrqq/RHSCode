export type InputType = 'default' | 'email' | 'number' | 'textarea'

export const handleBadTypo = (value: string, type: InputType = 'default'): string => {
  if (type === 'email') {
    return value.replace(/[^a-zA-Z0-9@._-]/g, '');
  }
  if (type === 'number') {
    return value.replace(/[^0-9]/g, '');
  }
  if (type === 'textarea') {
    return value.replace(/[^a-zA-Z0-9\s.,?!-_:\n]/g, '');
  }
  return value.replace(/[^a-zA-Z0-9\s]/g, '');
};