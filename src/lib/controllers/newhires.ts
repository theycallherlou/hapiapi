import { Request, Response } from 'express';

// list of new hire IDs
export async function getNewHireIds(req: Request, res: Response) {
  try {
    res.status(200).json({ message: 'List of new hire IDs' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch new hire IDs' });
  }
}

// new hire by ID
export async function getNewHireById(req: Request, res: Response) {
  try {
    const { newHireId } = req.params;
    res
      .status(200)
      .json({ message: `New hire with ID ${newHireId}` });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch new hire' });
  }
}

// list of new hires
export async function getAllNewHires(req: Request, res: Response) {
  try {
    res.status(200).json({ message: 'List of new hires' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch new hires' });
  }
}

// individual new hire by eecode
export async function getNewHireByEmployeeCode(
  req: Request,
  res: Response
) {
  try {
    const { eecode } = req.params;
    res
      .status(200)
      .json({ message: `New hire with employee code ${eecode}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch new hire by employee code' });
  }
}
