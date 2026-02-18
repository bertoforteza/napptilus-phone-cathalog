import phoneDetailsMock from '../../mocks/phoneDetailsMock';
import { render, screen } from '../../test/test-utils';
import Specifications from './Specifications';

describe('Given a Specifications component', () => {
  describe('When it receives a phone details data', () => {
    test("Then it should display the phone's specifications", () => {
      const phone = phoneDetailsMock;

      render(<Specifications phone={phone} />);

      const title = screen.getByText('Specifications');
      const brandValue = screen.getByText(phone.brand);
      const nameValue = screen.getByText(phone.name);
      const descriptionValue = screen.getByText(phone.description);
      const screenValue = screen.getByText(phone.specs.screen);
      const resolutionValue = screen.getByText(phone.specs.resolution);
      const processorValue = screen.getByText(phone.specs.processor);
      const mainCameraValue = screen.getByText(phone.specs.mainCamera);
      const selfieCameraValue = screen.getByText(phone.specs.selfieCamera);
      const batteryValue = screen.getByText(phone.specs.battery);
      const osValue = screen.getByText(phone.specs.os);
      const screenRefreshRateValue = screen.getByText(phone.specs.screenRefreshRate);

      expect(title).toBeVisible();
      expect(brandValue).toBeVisible();
      expect(nameValue).toBeVisible();
      expect(descriptionValue).toBeVisible();
      expect(screenValue).toBeVisible();
      expect(resolutionValue).toBeVisible();
      expect(processorValue).toBeVisible();
      expect(mainCameraValue).toBeVisible();
      expect(selfieCameraValue).toBeVisible();
      expect(batteryValue).toBeVisible();
      expect(osValue).toBeVisible();
      expect(screenRefreshRateValue).toBeVisible();
    });
  });
});
